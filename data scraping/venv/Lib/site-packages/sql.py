"""
Light helper for DB API specification 2.0 compliant connections making
working with results a lot simpler.

http://www.python.org/dev/peps/pep-0249/ for Humans
"""

__version__ = "2022.4.0"

from collections import namedtuple
from contextlib import closing


class SQL(object):
    """
    Instantiate with a DB API v 2.0 connection then use one, all or run method.
    """

    def __init__(self, connection):
        self.connection = connection

    def one(self, query, parameters=None):
        """
        fetchone returning scalar or namedtuple
        """
        with closing(self.connection.cursor()) as cursor:
            if parameters:
                cursor.execute(query, parameters)
            else:
                cursor.execute(query)
            Record = self.make_record(cursor)
            try:
                if Record is None:
                    return cursor.fetchone()[0]
                return Record(*cursor.fetchone())
            except TypeError:
                return None

    def all(self, query, parameters=None):
        """
        fetchall returning list of scalars or namedtuples
        """
        with closing(self.connection.cursor()) as cursor:
            if parameters:
                cursor.execute(query, parameters)
            else:
                cursor.execute(query)
            Record = self.make_record(cursor)
            if Record is None:
                return [record[0] for record in cursor.fetchall()]
            return [Record(*record) for record in cursor.fetchall()]

    def run(self, query, parameters=None):
        """
        execute or executemany depending on parameters
        """
        with closing(self.connection.cursor()) as cursor:
            execute = getattr(cursor, self.which_execute(parameters))
            if parameters:
                execute(query, parameters)
            else:
                execute(query)
        # to make it possible to chain run(...).commit()
        return self

    def commit(self):
        self.connection.commit()

    @staticmethod
    def make_record(cursor):
        """
        return namedtuple suitable for fetching result from cursor
        """
        if len(cursor.description) > 1:
            fields = [description[0] for description in cursor.description]
            try:
                return namedtuple("Record", fields)
            except ValueError as e:
                expression = e.args[0].split(":").pop().strip()
                raise SQLException("Missing AS for %s", expression)

    @staticmethod
    def which_execute(parameters_or_seq):
        """
        which of execute or executemany
        """
        if not parameters_or_seq:
            return "execute"
        sequences = (list, tuple)
        types_many = (dict, list, tuple)
        if type(parameters_or_seq) == dict:
            return "execute"
        if any(type(parameters_or_seq) == type_ for type_ in sequences):
            if any(type(parameters_or_seq[0]) == type_ for type_ in types_many):
                return "executemany"
            return "execute"


class SQLException(Exception):
    pass
