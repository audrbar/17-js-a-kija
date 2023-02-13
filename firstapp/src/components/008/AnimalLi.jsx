function AnimalLi ({animal, index}) {
    return (
       <li style={{
        backgroundColor: index % 2 ? '#eee' : '#ddd',
        color: animal.color,
        fontWeight: animal.bold ? 'bold' : null
    }} className="list-group-item">{animal.animal}</li>
    )
}
export default AnimalLi;