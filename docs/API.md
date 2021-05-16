### API

#### admin

##### 共通部分（登陆页）

- 登陆验证（POST）

```js
`${api.common}/validate`
```

主要返回给后端的是输入的账户以及密码，后端进行校验之后，无效账户返回0，学生返回1，管理员返回2

##### 管理员

```js
const api = {
    adm: 'http://localhost:8089/clientA/api/adm'
}
```

- 获得管理员信息（GET）

  ```js
  `${api.adm}/getAdmInfo/${account}`
  ```

  account为管理员的账号信息，需要返回一个包含管理员姓名、性别、账户、密码的json信息，属性定义如下

  ```js
  this.admin_Info = {
          name: '刘峰',
          sex: '男',
          account: '181250000',
          password: '123456'
        }
  ```

- 获得管理员需要的学生信息（GET）

  ```js
  `${api.adm}/getStuInfoForAdm`
  ```

  需要返回一个包含该学院学生名单的数组，包含学生学号、学生姓名、学生性别、学生所属学院，属性定义如下

  ```js
  [
  		{
            id: 181250000,
            name: '刘峰',
            sex: '男',
            department: '软件学院',
          },
          {
            id: 181250000,
            name: '刘峰',
            sex: '男',
            department: '软件学院',
          }
  ]
  ```

- 获得管理员需要的课程信息（GET）

  ```js
  `${api.adm}/getLessonInfoForAdm`
  ```

  需要返回一个包含课程信息、课程名称、课程学分、课程教师、课程地点、课程是否共享、选课人数的数组，属性定义如下

  ```js
  [
  		{
            lesson_id: '12354',
            lesson_name: '数据集成',
            lesson_point: '2',
            teachers: '刘峰',
            classroom: '教学楼202',
            isShared: '否',
            chooseCount: 120
          }
  ]
  ```

- 修改管理员的密码（POST）

  ```js
  `${api.adm}/changeAdmPassword`
  ```

  传回的值为管理员的账号以及修改后的密码，属性定义如下

  ```js
  {
          "account": this.admin_Info.account,
          "password": this.admin_Info.password
  }
  ```

- 更新课程信息（POST）

  ```js
  `${api.adm}/updateAdmLesson`
  ```

  传回的值是课程信息，每次调用需要后台根据传回的值进行更新，为了方便，删除修改插入都将调用此api，属性定义如下

  ```js
  [
  		{
              lesson_id: '12354',
              lesson_name: '数据集成',
              lesson_point: '2',
              teachers: '刘峰',
              classroom: '教学楼202',
              isShared: '否'
            }
  ]
  ```

##### 学生

```js
const api = {
    stu: 'http://localhost:8089/clientA/api/stu'
}
```

- 获得学生信息（GET）

  ```js
  `${api.stu}/getStuInfo/${account}`
  ```

  account为学生的账号信息，需要返回一个包含学生学号、姓名、性别、院系、账户、密码的json对象，属性定义如下

  ```js
  {
          id: 181250000,
          name: '刘峰',
          sex: '男',
          department: '软件学院',
          account: '181250000',
          password: '1232456'
  }
  ```

- 获得课程信息（GET）

  ```js
  `${api.stu}/getLessonInfo`
  ```

  需要返回课程信息的json对象数组，属性定义如下

  ```js
  [
  		{
              lesson_id: '12354',
              lesson_name: '数据集成',
              lesson_point: '2',
              teachers: '刘峰',
              classroom: '教学楼202',
              isShared: '否'
            }
  ]
  ```

- 修改密码（POST）

  ```js
  `${api.stu}/changePassword`
  ```

  逻辑同管理员一样，属性定义如下

  ```js
  {
          "account": this.student_Info.account,
          "password": this.student_Info.password
  }
  ```

- 选课（POST）

  ```js
  `${api.stu}/chooseLesson`
  ```

  学生选课，传的值是选课的学生学号以及被选的课的课程编号，属性定义如下

  ```js
  {
          "lesson_id": id,
          "student_id": this.stu_id
  }
  ```

- 获得学生的选课信息（GET）

  ```js
  `${api.stu}/getChoosedLesson/${stuId}`
  ```

  根据学生学号获得该生的选课信息，需要返回课程编号，课程名称，学分，授课老师，授课地点，是否共享等信息，一个json对象的集合，属性定义如下：

  ```js
  [
  		{
            lesson_id: '12354',
            lesson_name: '数据集成',
            lesson_point: '2',
            teachers: '刘峰',
            classroom: '教学楼202',
            isShared: '否'
          }
  ]
  ```

- 退课（POST）

  ```js
  `${api.stu}/dropLesson`
  ```

  通过传回的由课程编号与学生学号组成的json对象进行删除，并返回退课之后该学生的课表

  传给后端的属性定义为

  ```js
  {
            "lesson_id":id,
            "student_id":this.stu_id
  }
  ```

  需要传回前端的属性定义为

  ```js
  [
  		{
            lesson_id: '12354',
            lesson_name: '数据集成',
            lesson_point: '2',
            teachers: '刘峰',
            classroom: '教学楼202',
            isShared: '否'
          }
  ]
  ```

  

