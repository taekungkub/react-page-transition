import { motion } from "framer-motion";
import { pageVariant } from "../../const/variants";

const PageComponent = () => {
  return (
    <motion.div
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="p-4"
    >
      <h1 className="text-2xl font-bold">Welcome to this Page</h1>
      <p>Page transition with Framer Motion</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
        non mauris vitae erat consequat aliquam. Morbi mollis, erat eu malesuada
        fermentum, est turpis suscipit nulla, ut aliquam nulla lectus nec est.
        Sed at lobortis mauris. Suspendisse et magna nisl. Quisque vitae erat in
        justo porta convallis. Nulla in dignissim sapien. Nulla facilisi. Nullam
        quis sapien euismod, aliquam nisl in, eleifend lectus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
        non mauris vitae erat consequat aliquam. Morbi mollis, erat eu malesuada
        fermentum, est turpis suscipit nulla, ut aliquam nulla lectus nec est.
        Sed at lobortis mauris. Suspendisse et magna nisl. Quisque vitae erat in
        justo porta convallis. Nulla in dignissim sapien. Nulla facilisi. Nullam
        quis sapien euismod, aliquam nisl in, eleifend lectus.
      </p>
    </motion.div>
  );
};

export default PageComponent;
