//  Initialize the state to the given mock back-end data
const initialState = {
  mylist: [
    {
      title: "Futurama",
      id: 1,
      img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },
    {
      title: "The Interview",
      id: 2,
      img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },
    {
      title: "Gilmore Girls",
      id: 3,
      img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],
  recommendations: [
    {
      title: "Family Guy",
      id: 4,
      img: "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },
    {
      title: "The Croods",
      id: 5,
      img: "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },
    {
      title: "Friends",
      id: 6,
      img: "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.mylist.filter(item => item.id === action.id).length === 0) {
        return {
          recommendations: [...state.recommendations],
          mylist: [
            state.recommendations.filter(item => item.id === action.id)[0],
            ...state.mylist
          ]
        };
      } else {
        return state;
      }
    case "REMOVE_ITEM":
      return {
        recommendations: [...state.recommendations],
        mylist: state.mylist.filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
