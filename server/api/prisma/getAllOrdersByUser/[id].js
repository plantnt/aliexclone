import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const orders = await prisma.order.findMany({
        where:{
            userId: event.context.params.id
        },
        orderBy: { 
            id: "desc"
        },
        include:{
            orderItem:{
                include:{
                    product: true
                }
            }
        }
    })

    return orders
})