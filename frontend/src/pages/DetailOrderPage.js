import React, { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import Moment from 'react-moment';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderByUser, getOrderDetailByUser } from "../actions/OrderAction";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Header from "../components/header/Header";
import { FilterStatusOrder, formatPrice } from "../untils";

function DetailOrderPage(props) {
    const { userInfo } = useSelector((state) => state.userSignin);
    const dispatch = useDispatch();
    const { orderId, totalPrice } = useParams();
    const [orderDetail, setOrderDeil] = useState({})
    const [orderItems, setOrderItems] = useState([])
    const detailProduct = useSelector((state) => state.orderByUser.myDetailsOrder);
    const { myOrders } = useSelector((state) => state.orderByUser);

    useEffect(() => {
        dispatch(getOrderByUser(userInfo?._id));
        dispatch(getOrderDetailByUser(orderId));
    }, []);

    useEffect(() => {
        setOrderDeil(detailProduct?.data)
    }, [detailProduct])

    useEffect(() => {
        const customItem = myOrders?.filter((item) => item?.order_code === orderDetail?.order_code)
        setOrderItems(customItem)
    }, [myOrders, orderDetail])

    const orderItem = (item) => (
        <div className="all-myorder-item">
            <div className="all-myorder-item-img">
                <img src={item?.image}></img>
            </div>
            <div className="all-myorder-item-name">
                <p>{item?.name}</p>
                <span>x{item?.qty}</span>
            </div>

        </div>
    );

    return (
        <div>
            <Header></Header>
            {
                orderItems && orderDetail ? (
                    <div>
                        <h2>{`Mã hóa đơn: ${orderDetail?._id}`}</h2>
                        <h2>Chi tiết hóa đơn</h2>
                        {orderItems && orderItems[0]?.orderItems?.map((item) => orderItem(item))}
                        <div>
                            <div>
                                <span>Trạng thái đơn hàng : </span>{" "}
                                {FilterStatusOrder(orderDetail?.status)}
                            </div>
                            <span>Ngày tạo đơn : </span>{" "}
                            <Moment format="DD/MM/YYYY">
                                {orderDetail?.order_date}
                            </Moment>
                        </div>
                        <div>
                            <span>Địa Chỉ Nhận Hàng: </span>{" "}
                            {orderDetail?.to_address}
                        </div>
                        <div>
                            <span>Tên người nhận: </span>{" "}
                            {orderDetail?.to_name}
                        </div>
                        <div>
                            <span>Số điện thoại người nhận: </span>{" "}
                            {orderDetail?.to_phone}
                        </div>
                        <div>
                            <span>Thời gian lấy dự kiến : </span>{" "}
                            <Moment format="hh:mm:ss DD/MM/YYYY">
                                {orderDetail?.pickup_time}
                            </Moment>
                        </div>
                        <div>
                            <span>Thời gian giao dự kiến : </span>{" "}
                            <Moment format="DD/MM/YYYY">
                                {orderDetail?.leadtime}
                            </Moment>
                        </div>
                        <div>
                            <span>Tổng số tiền : </span>{" "}
                            <strong>{formatPrice(totalPrice)}₫</strong>
                        </div>

                    </div>
                ) : (
                    <ReactLoading type="balls" color="#6b6b6b" height={200} width={200} />
                )
            }

            <ScrollToTop></ScrollToTop>
        </div>
    );
}

export default DetailOrderPage;
