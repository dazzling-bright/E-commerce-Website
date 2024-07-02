const ItemPrice = () => {
  return (
    <div className="flex justify-between items-center">
      <p>
        <span className="text-very-dark-blue text-4xl font-bold">$125.00</span>
        <span className="ml-4 bg-very-dark-blue text-white p-2 rounded-lg text-sm align-top">
          50%
        </span>
      </p>

      <span className="line-through">$250.00</span>
    </div>
  );
}

export default ItemPrice;
