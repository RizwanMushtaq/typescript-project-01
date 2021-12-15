// console.log('Sec7GenericUtilityTypes')

// //Built in utility types, they give extra type safety
// //Built in Utility tyoe is Partial
// interface CourseGoal {
//     titel: string
//     description: string
//     completeUntil: Date
// }

// function createCourseGoal(
//     title: string,
//     description: string,
//     date: Date
// ): CourseGoal {
//     let courseGoal: Partial<CourseGoal> = {}
//     courseGoal.titel = title
//     courseGoal.description = description
//     courseGoal.completeUntil = date
//     return courseGoal as CourseGoal
// }

// //Another built in Utility type is Readonly

// const names: Readonly<string[]> = ['Max', 'Rizwan']
// // names.push('Manu')
// // names.pop()




