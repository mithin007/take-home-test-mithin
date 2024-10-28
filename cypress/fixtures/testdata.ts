export module TestDataObject {
  export const dataSet = [
    { userName: 'test1234', password: 'password1' },
    { userName: 'test7890', password: 'password2' }
  ]
  export const dataSet1 = [
    { userName: ('env:userName1'), password: 'password1' },
    { userName: 'test7890', password: 'password2' }
  ]
};