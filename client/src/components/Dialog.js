import Popup from "reactjs-popup";
import { motion } from "framer-motion";

const Dialog = ({ trigger, children }) => {
  return (
    <Popup
      trigger={trigger}
      position="center"
      className="popup"
      arrow="false"
      arrowStyle={{ display: "none" }}
      modal="true"
      overlayStyle={{ background: "rgba(0,0,0,0.4)" }}
    >
      {(close) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
        >
          <div className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 m-2">
            {children(close)}
          </div>
        </motion.div>
      )}
    </Popup>
  );
};

export default Dialog;
