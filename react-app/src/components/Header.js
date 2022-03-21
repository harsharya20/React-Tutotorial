

const Header = ({ title }) => {
  return (
      <header>
    <h1 style = {headingStyle}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task'
}

const headingStyle = {
    color: 'red'
}

export default Header