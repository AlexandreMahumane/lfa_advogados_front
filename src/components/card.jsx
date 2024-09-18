import photo from "../assets/photo5.jpeg";
import { LinkComponent } from "./link-component";
import { motion } from "framer-motion";
export const Card = ({ variant, path }) => {
  const type = `${variant != "N" ? "px-0" : "px-3"}`;
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      viewport={{ once: true }}
      className="p-4 h-fit w-72 border-b border-black"
    >
      <div className="h-56">
        <img src={photo} className="w-full object-cover h-full" alt="" />
      </div>
      <div>
        <h3 className={`text-lg ${type} px-3 font-medium`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          inventore.
        </h3>
        <p className="font-thin text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          incidunt dolore itaque dolores quam mollitia autem at aliquid unde
          sed.
        </p>
      </div>
      <LinkComponent path={path} />
    </motion.section>
  );
};
