package com.pctra266.store;

public class OrderService {
    private PaymentService paymentService;

    public OrderService(PaymentService paymentService){
        this.paymentService = paymentService;
    }
    public  void placeOrder(){
        paymentService.processPayment(10);
    }


    public void setPaymentService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}
