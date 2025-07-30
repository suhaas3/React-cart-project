import axios from "axios";
import { useEffect, useState } from "react";
import EditApiData from "../APIComponenet/EditApiData/EditApiData";
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Input from "@mui/material/Input";

function Checkout() {

  const [userDetails, setUserDetails] = useState({
    createdAt: "",
    email: "",
    passWord: ""
  })

    const [jsonData, setJsonData] = useState([]);

  const [isOpenEditing, setOpenEditing] = useState(false);

  const [open, setOpen] = React.useState(isOpenEditing);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();


  const handleClose = () => {
    setOpenEditing(prev => !prev);
  };

  const mockObject = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    "userId": 2,
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    "userId": 2,
    "id": 14,
    "title": "voluptatem eligendi optio",
    "body": "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    "userId": 2,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    "userId": 2,
    "id": 16,
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "body": "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    "userId": 2,
    "id": 17,
    "title": "fugit voluptas sed molestias voluptatem provident",
    "body": "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    "userId": 2,
    "id": 18,
    "title": "voluptate et itaque vero tempora molestiae",
    "body": "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    "userId": 2,
    "id": 19,
    "title": "adipisci placeat illum aut reiciendis qui",
    "body": "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    "userId": 2,
    "id": 20,
    "title": "doloribus ad provident suscipit at",
    "body": "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    "userId": 3,
    "id": 21,
    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
    "body": "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
  }]


  // async function getApiData() {

  //   try {
  //     const urlData = await axios.get("https://jsonplaceholder.typicode.com/users");

  //     const response = urlData;
  //     setJsonData(response.data);

  //   } catch (error) {
  //     console.log('error', error.message);
  //   }
  // }

  // const today = new Date();
  // const year = today.getFullYear();
  // const month = today.getMonth();
  // const date = today.getDate();
  // const todayDate = `${date}-${month}-${year}`;

  // async function createUser() {
  //   if (userDetails.userName === "" || userDetails.passWord === "") {
  //     console.log("please fill the both userName or PassWord!")
  //     alert("fill the both email or passWord!");
  //     return;
  //   }
  //   try {
  //     const urlData = await axios.post("https://jsonplaceholder.typicode.com/users", {
  //       createdAt: todayDate,
  //       email: userDetails.userName,
  //       passWord: userDetails.passWord
  //     })
  //     setUserDetails(urlData.data)
  //   } catch (error) {
  //     console.log('error :', error);
  //   }
  // }

  // async function editUser() {
  //   setOpenEditing(prev => !prev);
  //   const urlData = await axios.put("https://jsonplaceholder.typicode.com/users/1");
  //   const response = urlData;
  //   setUserDetails(response.data);
  // }


  // function deleleUser() {

  // }

  function displayUser() {
    setJsonData(mockObject)
  }

  function createUser() {

  }

  function updateUser() {

  }

  function deleleUser() {

  }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }


  return (
    <>

      <div className="input-details" style={{ marginBottom: "150px", display: "flex", flexDirection: "column", alignItems: "start", marginLeft: "100px" }}>
        <TextField id="outlined-basic" label="email" name="userName" onChange={handleInput} variant="outlined" style={{ marginTop: "30px", marginBottom: "30px" }} />

        <TextField id="outlined-basic" label="Password" name="passWord"  onChange={handleInput}  variant="outlined" />

        <div className="container-fluid" style={{ display: "flex", gap: "30px", marginTop: "30px" }}>


          <button onClick={displayUser}>display</button>
          <button onClick={createUser}>create data</button>
          <button onClick={updateUser}>update data</button>
          <button onClick={deleleUser}>delete data</button>
        </div>

      </div>

      {jsonData.map((item,index) => {
        return (
          <>
            <div>{item.title}</div>
          </>
        )
      })}
     
      {/* <table class="table">
  <thead>
    <tr>
      <th scope="col">ID's</th>
      <th scope="col">userDetails</th>
      <th scope="col">PassWord</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{userDetails.createdAt}</th>
      <td>{userDetails.email}</td>
      <td>{userDetails.passWord}</td>
    </tr>
  </tbody>
</table> */}

      <React.Fragment>
        <Dialog
          fullScreen={fullScreen}
          open={isOpenEditing}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <div style={{ display: "flex", flexDirection: "column", height: "200px", justifyContent: "space-between", margin: "40px" }}>

            <TextField id="outlined-basic" className="userNameBox" value={userDetails.email} style={{ height: "40px", width: "300px", marginBottom: "40px" }} label="UserName" name="Password" variant="outlined" />

            <TextField id="outlined-basic" className="passwordBox" value={userDetails.passWord} style={{ height: "40px", width: "300px", marginBottom: "40px" }} label="Password" name="Email" variant="outlined" />


            <Button variant="contained" onClick={handleClose}>Submit</Button>
          </div>
        </Dialog>
      </React.Fragment>
    </>
  );
}


export default Checkout;