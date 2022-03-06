import sendRequest from './send-request';

const BASE_URL = '/api/foods';

// Retrieve a food log
export function getFoodLog() {
  return sendRequest(`${BASE_URL}/log`);
}

// Add an item to the food log
export function addItemToLog(itemId) {
  // Just send itemId for best security 
  return sendRequest(`${BASE_URL}/log/items/${itemId}`, 'POST');
}

// Update the item's qty in the food log
// Will add the item to the food log if not currently in the logged food list
// Sending info via the data payload instead of a long URL
export function setItemQtyInLog(itemId, newQty) {
  return sendRequest(`${BASE_URL}/log/qty`, 'PUT', { itemId, newQty });
}

// Updates the isLogged to true
export function foodLog() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/log/foodLog`, 'POST');
}

// Return all paid orders for the logged in user
export function getFoodLogHistory() {
  return sendRequest(`${BASE_URL}/history`);
}
