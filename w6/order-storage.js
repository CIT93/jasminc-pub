const LOCAL_STORAGE_KEY = 'tshirt_orders_data';


export const saveOrders = function (orders) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Orders saved to localStorage successfully!')
    } catch (error) {
        console.error(`Error saving entries to localStorage: ${error}`);
    }
};


export const loadOrders = function () {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return [];
    } catch (error) {
         console.error(`Error loading orders from localStorage: ${error}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return [];
    }
};