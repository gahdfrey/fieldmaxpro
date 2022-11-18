import { OverList } from "./OverList.jsx";

function Card({ li,id}) {
  return (
    <>
    <div id={id}>
      <ul className="text=[40rem]">{li}</ul>
      <ul>{li}</ul>
      <ul>{li}</ul>
    </div>
    <div id={id}>
    <ul className="text=[40rem]">{li}</ul>
    <ul>{li}</ul>
    <ul>{li}</ul>
  </div>
  <div id={id}>
  <ul className="text=[40rem]">{li}</ul>
  <ul>{li}</ul>
  <ul>{li}</ul>
</div>
</>
  );
}

export default function list() {
  return OverList.map((item, index) => (
    <div key={index}>
      <Card ul={item.li} />
    </div>
  ));
}



// function Card({ image, h2, p,id }) {
//   return (
//     <motion.div className="card" id={id}
//         initial={"offscreen"}
//         whileInView={"onscreen"}
//         viewport={{once:false, amount:0.5}}
//         transition={{staggerChildren:0.5}}
//     >
// <motion.div className="image-container"       
//         variants={imageAnimate}
//       >{image}</motion.div>

//       <motion.h2 
//         variants={textAnimate}
//       >{h2}</motion.h2>

//       <motion.p
//          variants={textAnimate}     
//       >{p}</motion.p>


//     </motion.div>
//   );
// }

