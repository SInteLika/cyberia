import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
    <ContentLoader
        speed={2}
        width={200}
        height={50}
        viewBox="0 0 200 50"
        backgroundColor="#313341"
        foregroundColor="#242530"
        {...props}
    >
        <rect x="21" y="5" rx="0" ry="0" width="1" height="0" />
        <rect x="0" y="5" rx="7" ry="7" width="200" height="47" />
    </ContentLoader>
)

export default MyLoader