
//for each and will loop through and will update where it find id hwere it found the product, update so it says quantity - purchase

array.forEach(e => {
    const res = await inst.updateWhere(`name = "${e.name}"`, { quantity: 'e.quantity-' });
}); 