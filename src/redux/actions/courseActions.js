export function createCourse(course) {
    return { type: "CREATE_COURSE", course: course }; // All actions must have a type property
}
