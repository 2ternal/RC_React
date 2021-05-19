function CityList(props){

    const {cities} = props;

    return(
        <div>
            <h1>CityList1</h1>
            <table border = '3' witdth = '200' align = 'center'>
                {cities.map((item, index) => {
                    return <tr><td>{index + 1}</td><td key = {index}>{item}</td></tr>;
                })}
            </table>
        </div>

    );
}

export default CityList;