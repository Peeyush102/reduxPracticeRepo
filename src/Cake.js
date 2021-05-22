import React from "react";
import { buyCake } from "./redux/cakes/cakeActions";
import { connect } from "react-redux";

function Cake({ numberOfCakes, buyCake }) {
  return (
    <div>
      <h2> Number of cakes : {numberOfCakes}</h2>
      <button onClick={buyCake}> Buy Cakes </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cake);
