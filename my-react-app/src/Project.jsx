import PropTypes from 'prop-types'


function Project(props) {
    return (
        <div>
            <h2><a href={props.repo_link}>{props.title}</a></h2>
            <p>{props.description}</p>
        </div>
    )
}

Project.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    repo_link: PropTypes.string
}

Project.defaultProps = {
    title: "Project Title",
    description: "This is the project's description.",
    repo_link: "https://github.com/TheTHINGYEEE"
}

export default Project