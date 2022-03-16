import images from '../E-images/download (2).jfif';
import {MdDelete} from 'react-icons/md';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';




export const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'pruducts',
      headerName: ' Pruducts',
      width: 170,
      editable: true,
      renderCell : (params)=>{
          return <div className="profileList">
              <img className='profileImage' src={params.row.avatar} alt="" />
              {params.row.productName}
          </div>
      }
    },
    {
      field: 'price',
      headerName: 'price',
      width: 250,
      editable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      width: 150,
      editable: true,
    },
    {
      field: 'total',
      headerName: 'Total',
      width: 160,
      editable: true,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 160,
        editable: true,
        renderCell: (params)=>{
            return(
                <>
                <Link to={'/mypage/product'+params.row.id}>
                <button className="actionButtonss">Vew Item</button>
                </Link>
                <MdDelete className="actionDelete" />
                </>
            )
        }
      },
  ];
  









export const rows = [
    { id: 1,
         productName: 'Shoe',
          avatar: images, 
          price: '$34.343',
          quantity : '5',
          total : '$42.342'
        },
        { id: 2,
            productName: 'Shoe',
             avatar: images, 
             price: '$4.343',
             quantity : '15',
             total : '$42.342'
           },
           { id: 3,
            productName: 'Shoe',
             avatar: images, 
             price: '$34.343',
             quantity : '15',
             total : '$42.342'
           },
           { id: 4,
            productName: 'Shoe',
             avatar: images, 
             price: '$4.343',
             quantity : '3',
             total : '$42.342'
           },
           { id: 5,
            productName: 'Shoe',
             avatar: images, 
             price: '$34.343',
             quantity : '5',
             total : '$42.342'
           },
           { id: 6,
            productName: 'Shoe',
             avatar: images, 
             price: '$34.343',
             quantity : '3',
             total : '$42.342'
           },
           { id: 7,
            productName: 'Shoe',
             avatar: images, 
             price: '$4.343',
             quantity : '15',
             total : '$42.342'
           },
  ];
