const Plant = ({ name, cost, description, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <img style={{height:"100px"}} src={image}></img>
      <p>Description: {description}</p>
      <p>Cost: {cost}</p>
    </>
  );
};

export default Plant;
