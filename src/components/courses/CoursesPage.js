import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
    state = {
        course: {
            title: ""
        }
    };

    handleChange(event) {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    }

    // Arrow function fixed binding error in shorter form then using the handleChange function above
    handleSubmit = event => {
        event.preventDefault();
        this.props.dispatch(courseActions.createCourse(this.state.course)); // actions need to be dispatched
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                <input
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.course.title}
                />
                <input type="submit" value="save" />
            </form>
        );
    }
}

CoursesPage.PropTypes = {
    dispatch: PropTypes.func.isRequired // Expect dispatch to be passed in to the CoursesPage component if MapDispatchToProps is ommitted in connect
};

function mapStateToProps(state, ownProps) {
    // Determines what part of state is exposed to the component
    return {
        courses: state.courses // Request only the data that is needed for component. Component will use this to rerender when it sees a change
    };
}

export default connect(
    mapStateToProps
    // mapDispatchToProps // Optional function that lets us decide what actions to pass to our component on props
)(CoursesPage); // connect returns a function and that function then calls our component
// // The above is the same as writing
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
// export default connectedStateAndProps(CoursesPage);
