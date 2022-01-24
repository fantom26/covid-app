const Item = ({ item }) => {
    return (
        <tr>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.dateOfBirdh}</td>
        </tr>
    );
};

export default Item;