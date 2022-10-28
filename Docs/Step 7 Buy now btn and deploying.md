- First Go to `[slug].js` and put in your `onClick`, we will create the function.
```
<button type="button" className="buy-now" onClick={handleBuyNow}>
    Buy now 
</button>
```
- Create your function.
```
const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
const handleBuyNow = () => {
    onAdd(product, qty)
    setShowCart(true)
}
```