// export const SortProductByDiscount = (products) => {
//     products.sort((a,b) => {
//         return (b.price - b.salePrice) - (a.price - a.salePrice);
//     })
//     const newSaleProducts = products.slice(0, 5);

//     return handlePercentDiscount(newSaleProducts);
// }

export const handlePercentDiscount = (products) => {
    const newList = products.map(product => {
        const percentDiscount = 100 - Math.round(product.salePrice * 100 / product.price);
        // const price = formatPrice(product.price)
        // const salePrice = formatPrice(product.salePrice)


        return { ...product, percentDiscount: percentDiscount }
    })
    return newList;
}

export const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('vi')
    return formatter.format(price)
}

export const getFirstCharacterUser = (name) => {
    const arrCharacter = name.split('')[0]
    return arrCharacter
}

export const formatDateOrderPaypal = (timestamp) => {
    const d = new Date(timestamp);
    const date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
    return date
}
export const formatDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        fractionalSecondDigits: 3, // Display 3 digits of milliseconds
        timeZoneName: 'short',
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate
}

const StatusOrder = {
    ready_to_pick: 'Mới tạo đơn hàng',
    picking: 'Nhân viên đang lấy hàng',
    cancel: 'Hủy đơn hàng',
    picked: 'Nhân viên đã lấy hàng',
    storing: 'Hàng đang nằm ở kho',
    delivering: 'Nhân viên đang giao cho người nhận',
    delivered: 'Nhân viên đã giao hàng thành công',
    delivery_fail: 'Nhân viên giao hàng thất bại',
    waiting_to_return: 'Đang đợi trả hàng về cho người gửi',
    return: 'Trả hàng',
}

export const FilterStatusOrder = (status) => {
    for (const [key, value] of Object.entries(StatusOrder)) {
        if (key === status) {
            return value ? value : 'Nhân viên đang lấy hàng'
        }
    }
}
