import {FilterCourses} from './filterCoursesPipe';

const mockCourseList = [
  {
    id: 'first',
    title: 'First Course',
    creation: 1589479993000,
    duration: 62,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    star: true,
  },
  {
    id: 'second',
    title: 'Second Course',
    creation: 1600107193000,
    duration: 35,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
  {
    id: 'third',
    title: 'Third Course',
    creation: 1610687993000,
    duration: 84,
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
  },
];

describe('TitleCasePipe', () => {
  const pipe = new FilterCourses();

  it('transforms courses to courses filtered by title', () => {
    expect(pipe.transform(mockCourseList, 'Second')).toEqual([{
      id: 'second',
      title: 'Second Course',
      creation: 1600107193000,
      duration: 35,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    }]);
  });

  it('transforms courses to empty array if the value is not found', () => {
    expect(pipe.transform(mockCourseList, 'abc def')).toEqual([]);
  });

  it('does not transform courses if the searched value is empty', () => {
    expect(pipe.transform(mockCourseList, '')).toEqual(mockCourseList);
  });

});
