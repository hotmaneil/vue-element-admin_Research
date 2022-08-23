/**
 * 資料格式範例
 */

/** 工作項目 */
export const tasks = [{
  id: 1,
  parentId: 0,
  title: 'Software Development',
  start: new Date('2022-02-21T05:00:00.000Z'),
  end: new Date('2022-07-04T12:00:00.000Z'),
  progress: 31
}, {
  id: 2,
  parentId: 1,
  title: 'Scope',
  start: new Date('2022-02-21T05:00:00.000Z'),
  end: new Date('2022-02-26T09:00:00.000Z'),
  progress: 60
}, {
  id: 3,
  parentId: 2,
  title: 'Determine project scope',
  start: new Date('2022-02-21T05:00:00.000Z'),
  end: new Date('2022-02-21T09:00:00.000Z'),
  progress: 100,
  num: 20
}, {
  id: 4,
  parentId: 2,
  title: 'Secure project sponsorship',
  start: new Date('2022-02-21T10:00:00.000Z'),
  end: new Date('2022-02-22T09:00:00.000Z'),
  progress: 100
}, {
  id: 5,
  parentId: 2,
  title: 'Define preliminary resources',
  start: new Date('2022-02-22T10:00:00.000Z'),
  end: new Date('2022-02-25T09:00:00.000Z'),
  progress: 60
}, {
  id: 6,
  parentId: 2,
  title: 'Secure core resources',
  start: new Date('2022-02-25T10:00:00.000Z'),
  end: new Date('2022-02-26T09:00:00.000Z'),
  progress: 0
}, {
  id: 7,
  parentId: 2,
  title: 'Scope complete',
  start: new Date('2022-02-26T09:00:00.000Z'),
  end: new Date('2022-02-26T09:00:00.000Z'),
  progress: 0
}, {
  id: 8,
  parentId: 1,
  title: 'Analysis/Software Requirements',
  start: new Date('2022-02-26T10:00:00.000Z'),
  end: new Date('2022-03-18T09:00:00.000Z'),
  progress: 80
}, {
  id: 9,
  parentId: 8,
  title: 'Conduct needs analysis',
  start: new Date('2022-02-26T10:00:00.000Z'),
  end: new Date('2022-03-05T09:00:00.000Z'),
  progress: 100
}, {
  id: 10,
  parentId: 8,
  title: 'Draft preliminary software specifications',
  start: new Date('2022-03-05T10:00:00.000Z'),
  end: new Date('2022-03-08T09:00:00.000Z'),
  progress: 100
}, {
  id: 11,
  parentId: 8,
  title: 'Develop preliminary budget',
  start: new Date('2022-03-08T10:00:00.000Z'),
  end: new Date('2022-03-12T09:00:00.000Z'),
  progress: 100
}, {
  id: 12,
  parentId: 0,
  title: '生產模組',
  start: new Date('2022-08-19T10:00:00.000Z'),
  end: new Date('2022-08-30T09:00:00.000Z'),
  progress: 0
}, {
  id: 13,
  parentId: 12,
  title: '工單管理',
  start: new Date('2022-08-19T10:00:00.000Z'),
  end: new Date('2022-08-23T09:00:00.000Z'),
  progress: 10,
  num: 1
},
{
  id: 14,
  parentId: 12,
  title: '工作日管理',
  start: new Date('2022-08-24T10:00:00.000Z'),
  end: new Date('2022-08-28T09:00:00.000Z'),
  progress: 0,
  num: 0
}]

/** 工作相依關係 */
export const dependencies = [{
  id: 1,
  predecessorId: 3,
  successorId: 4,
  type: 0
}, {
  id: 2,
  predecessorId: 4,
  successorId: 5,
  type: 0
}, {
  id: 3,
  predecessorId: 5,
  successorId: 6,
  type: 0
}, {
  id: 4,
  predecessorId: 6,
  successorId: 7,
  type: 0
}, {
  id: 5,
  predecessorId: 7,
  successorId: 9,
  type: 0
}]

/** 指派對象 */
export const workers = [{
  id: 1,
  text: 'Management'
}, {
  id: 2,
  text: 'Project Manager'
}, {
  id: 3,
  text: 'Analyst'
}, {
  id: 4,
  text: '開發者'
}, {
  id: 5,
  text: 'Testers'
}, {
  id: 6,
  text: 'Trainers'
}, {
  id: 7,
  text: '作業員A'
}, {
  id: 8,
  text: 'Deployment Team'
}]

/** 工作已指派到對象 */
export const resourceAssignments = [{
  id: 0,
  taskId: 3,
  resourceId: 1
}, {
  id: 1,
  taskId: 4,
  resourceId: 1
}, {
  id: 2,
  taskId: 5,
  resourceId: 2
}, {
  id: 3,
  taskId: 6,
  resourceId: 2
}, {
  id: 4,
  taskId: 9,
  resourceId: 3
}]
