-- AddForeignKey
ALTER TABLE "Shipping_Orders" ADD CONSTRAINT "Shipping_Orders_order_fkey" FOREIGN KEY ("order") REFERENCES "Order"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
