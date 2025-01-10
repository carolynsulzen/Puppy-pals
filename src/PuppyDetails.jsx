
const PuppyDetails = (props)=>{
return(
  <>
  <h1>
    <section class = "puppyDetails">
      <h1 id = "name">Name: {props.puppyName}</h1>
      <h4>Email: {props.puppyEmail}</h4>
      <h4>Age: {props.puppyAge}</h4>
      <h4>ownerId: {props.puppyOwnerId}</h4>
    </section>
  </h1>
  </>
)
}
export default PuppyDetails;