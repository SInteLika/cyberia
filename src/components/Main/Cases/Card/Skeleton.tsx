import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={387}
        height={378}
        viewBox="0 0 387 378"
        backgroundColor="#313341"
        foregroundColor="#242530"
        {...props}
    >
        <rect x="21" y="5" rx="0" ry="0" width="1" height="0" />
        <rect x="0" y="0" rx="10" ry="10" width="387" height="378" />
    </ContentLoader>
)

export default MyLoader
