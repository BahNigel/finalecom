import images from '../../../E-images/download (3).jfif';


export const rows = [
    { id: 1,
         productName: 'Shoe',
          avatar: images, 
          stock: 24,
          status : 'Active',
          price : '$42.342'
        },
        { id: 2,
            productName: 'Shoe',
             avatar: images, 
             stock: 0,
             status : 'Pending',
             price : '$42.342'
           },
           { id: 3,
            productName: 'Shoe',
             avatar: images, 
             stock: 24,
             status : 'Pending',
             price : '$42.342'
           },
           { id: 4,
            productName: 'Shoe',
             avatar: images, 
             stock: 0,
             status : 'Declined',
             price : '$42.342'
           },
           { id: 5,
            productName: 'Shoe',
             avatar: images, 
             stock: 24,
             status : 'Active',
             price : '$42.342'
           },
           { id: 6,
            productName: 'Shoe',
             avatar: images, 
             stock: 24,
             status : 'Declined',
             price : '$42.342'
           },
           { id: 7,
            productName: 'Shoe',
             avatar: images, 
             stock: 0,
             status : 'Pending',
             price : '$42.342'
           },
  ];




  export const data = {
    labels : ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets : [{
        label : 'sales for 2020 (M)',
        data : [2,3,2,4,3,6,5,6,0,2,9,1],
        borderColor:['blue'],
        backgroundColor: ['blue'],
        pointBoderColor :['blue'],
        pointBackgroundColor:['blue']
    },
    {
        label : 'sales for 2019 (M)',
        data : [2,2,2,4,2,1,5,8,0,2,9,1],
        borderColor:['green'],
        backgroundColor: ['green'],
        pointBoderColor :['green'],
        pointBackgroundColor:['green']
    },
    {
        label : 'sales for 2021 (M)',
        data : [2,7,2,4,4,6,5,6,0,2,9,4],
        borderColor:['red'],
        backgroundColor: ['red'],
        pointBoderColor :['red'],
        pointBackgroundColor:['red']
    },
]
}