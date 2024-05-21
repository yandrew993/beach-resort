import React from "react";

export default function Title({ title }) {
  return (
    <div clasName="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
}

//import React, { Component } from "react";
// import defaultBcg from "../images/room-1.jpeg";
// import Hero from "../components/Hero";
// import Banner from "../components/Banner";
// import { Link, useParams } from "react-router-dom";
// import { RoomContext } from "../context";

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     // console.log(this.props);
//     // let { slug } = useParams();
//     this.state = {
//       slug: this.props.match.params.slug,
//       defaultBcg,
//     };
//     console.log(this.state);
//   }
//   static contextType = RoomContext;
//   // component;
//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);
//     if (!room) {
//       return (
//         <div className="error">
//           <h3>no such room could be found...</h3>
//           <Link to="/rooms" className="btn-primary">
//             back to rooms
//           </Link>
//         </div>
//       );
//     }
//     return <div>SingleRoom{room.name}</div>;
//   }
// }
