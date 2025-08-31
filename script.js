const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
  
  let total = 0;
  prices.forEach(price => {
    total += parseFloat(price.textContent) || 0; // convert to number
  });

  // Display the total
  const totalDiv = document.createElement("div");
  totalDiv.textContent = `Total Price: ${total}`;
  document.body.appendChild(totalDiv);
	
  
};

getSumBtn.addEventListener("click", getSum);

