import styles from '../styles/Products.module.css'

export default function Products({productsData}) {
    return (
        <>
            {
                productsData.map( (item, index) => {
                    return (
                    <>
                        <div className={styles.block} key={index}>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    </>
                    )
                })
            }
        </>
    )
}