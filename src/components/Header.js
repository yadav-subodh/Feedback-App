import PropTypes from 'prop-types'
const Header = ({ text }) => {

  const headertyle={
    backgroundColor:"blue",
    color:"red"
  }
  return (
    <header style={headertyle}>
    <div className='container'> 
    <h2>Welcome To Feedback UI {text}</h2>
    </div>
    </header>
  )
}

Header.defaultProps={
  text:""
}

Header.prototype={
  text:PropTypes.string,
}
export default Header