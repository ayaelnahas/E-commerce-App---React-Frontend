
import { ADD_PRODUCT, DELETE_PRODUCT, VIEW_PRODUCT_DETAILS, INCREASE_PAGE, DECREASE_PAGE, CHANGE_PAGE } from '../Actions/actions'
import image1 from '../../img/pic1.jpg';
import image2 from '../../img/pic2.jpg';
import image3 from '../../img/pic3.jpg';
import image4 from '../../img/pic4.jpg';

const initialState =
{
    productArray: [
        {
            id: '1',
            name: 'Nude Lip Stick',
            description: '',
            priceBefore: '200',
            status: 'On Sale',
            discount: '35',
            get priceAfter() { return this.priceBefore - ((this.discount / 100) * this.priceBefore) },
            ProductImg: image1,

        },
        {
            id: '2',
            name: 'Aviance cream',
            description: '',
            priceBefore: '500',
            status: 'Not On Sale',
            ProductImg: image2,

        },
        {
            id: '3',
            name: 'MakeUp Set',
            description: '',
            priceBefore: '340',
            status: 'Not On Sale',
            ProductImg: image3,

        },
        {
            id: '4',
            name: 'Indie Lee Skin Care',
            description: '',
            priceBefore: '200',
            status: 'On Sale',
            discount: '20',
            get priceAfter() { return this.priceBefore - ((this.discount / 100) * this.priceBefore) },
            ProductImg: image4,
        },
        {
            id: '5',
            name: 'Nude Lip Stick',
            description: '',
            priceBefore: '230',
            status: 'Not On Sale',
            ProductImg: image1,
        },
        {
            id: '6',
            name: 'Aviance cream',
            description: '',
            priceBefore: '440',
            status: 'Not On Sale',
            ProductImg: image2,
        },
        {
            id: '7',
            name: 'MakeUp Set',
            description: '',
            priceBefore: '358',
            status: 'On Sale',
            discount: '50',
            get priceAfter() { return this.priceBefore - ((this.discount / 100) * this.priceBefore) },
            ProductImg: image3,

        },
        {
            id: '8',
            name: 'Indie Lee Skin Care',
            description: '',
            priceBefore: '840',
            status: 'Not On Sale',
            ProductImg: image4,
        },
        {
            id: '9',
            name: 'Nude Lip Stick',
            description: '',
            status: 'On Sale',
            priceBefore: '100',
            discount: '15',
            get priceAfter() { return this.priceBefore - ((this.discount / 100) * this.priceBefore) },
            ProductImg: image1,
        },

    ],
    product: {},
    newProduct: {},
    selectedOption: '',
    currentPage: 1,
    cardsPerPage: 6,

}


const productReducer = (state = initialState, action) => {

    let newArr = [...state.productArray];
    switch (action.type) {
        case ADD_PRODUCT:
            let newItem = { ...state.newProduct };
            newItem = action.product;
            newItem.id = (state.productArray.length + 1).toString();
            //console.log(newItem);
            newArr.push(newItem);

            break;
        case DELETE_PRODUCT:
            let productIndex = state.productArray.findIndex(p => {
                return p.id === action.id;
            })
            newArr.splice(productIndex, 1);
            break;
        case VIEW_PRODUCT_DETAILS:
            let Index = state.productArray.findIndex(p => {
                return p.id === action.id;
            })
            let DetailedProduct = state.productArray[Index];
            state.product = DetailedProduct;
            break;
        case INCREASE_PAGE:
            let currentPageCopyI = state.currentPage;
            if (currentPageCopyI < (Math.ceil(state.productArray.length / state.cardsPerPage))) {
                currentPageCopyI += 1;
            }
            return {
                ...state,
                currentPage: currentPageCopyI
            }

        case DECREASE_PAGE:
            let currentPageCopyD = state.currentPage;
            if (currentPageCopyD > 1) {
                currentPageCopyD -= 1;
            }
            return {
                ...state,
                currentPage: currentPageCopyD
            }

        case CHANGE_PAGE:
            state.currentPage = action.payload

            break;
        default:
            break;
    }

    return {
        ...state,
        productArray: newArr
    };

}

export default productReducer;
