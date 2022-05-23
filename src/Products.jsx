

const products = (state, {payload}) => {
    case SEARCH_PRODUCTS: {
        const searchValue = payload? .toLowerCase();
        return {
            ...state.products,
            loading: false,
            isSearchActive: ! !payload.lenght > 0 || false,
            
        }
    }
}