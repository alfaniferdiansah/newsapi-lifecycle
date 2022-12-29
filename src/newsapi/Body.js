import React from 'react'

class Body extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchFrom: document.querySelector('.search'),
            input: document.querySelector('.input'),
            newsList: document.querySelector('.news-list')
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps (props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount () {
        console.log('componentDidMount')
        setTimeout(() => {
            this.setState({
            retrieve: searchFrom.addEventListener('submit')
            })
        }, 5000);
    }

    validate() {
        function retrieve(e){
            if (input.value == ''){
                alert('input field is empty! Please fill the field')
            }

            newsList.innerHTML = ''

            e.preventDefault()

            const apiKey = '1d43adec9e5c4a508292f5dfb1ffe7bd'
            let topic = input.value;
            let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
            
            const getNews = fetch(url)
            getNews
                .then((res)=>{return res.json()})
                .then((data)=>{
                console.log(data)
                    data.articles.forEach(article => {
                        let li = document.createElement('li');
                        let a = document.createElement('a');
                        a.setAttribute('href', article.url);
                        a.setAttribute('target', '_blank');
                        li.appendChild(a);
                        newsList.appendChild(li);
                        a.textContent = article.title;
                    });
                }).catch((error)=>{
                    console.log(error)
                })
        }
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    render(){
        console.log('render')
        return(
            <div className="container-fluid">
		<div className="row d-flex justify-content-center mr-4">
            <form className="input-group mb-3 mt-4 search">
                <input type="text" className="form-control input" placeholder="Search"/>
                <button className="btn btn-primary" type="submit">Go</button>
            </form>
        </div>
            <table className="table">
                <tbody className="news-list" />     
            </table>
    </div>
        )
    }
}


        // const searchFrom = document.querySelector('.search');
        // const input = document.querySelector('.input');
        // const newsList = document.querySelector('.news-list');

        // searchFrom.addEventListener('submit', retrieve)

        // function retrieve(e){
        //     if (input.value == ''){
        //         alert('input field is empty! Please fill the field')
        //     }

        //     newsList.innerHTML = ''

        //     e.preventDefault()

        //     const apiKey = '1d43adec9e5c4a508292f5dfb1ffe7bd'
        //     let topic = input.value;
        //     let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
            
        //     const getNews = fetch(url)
        //     getNews
        //         .then((res)=>{return res.json()})
        //         .then((data)=>{
        //         console.log(data)
        //             data.articles.forEach(article => {
        //                 let li = document.createElement('li');
        //                 let a = document.createElement('a');
        //                 a.setAttribute('href', article.url);
        //                 a.setAttribute('target', '_blank');
        //                 li.appendChild(a);
        //                 newsList.appendChild(li);
        //                 a.textContent = article.title;
        //             });
        //         }).catch((error)=>{
        //             console.log(error)
        //         })
        // }
//   return (
//     <div className="container-fluid">
// 		<div className="row d-flex justify-content-center mr-4">
//             <form className="input-group mb-3 mt-4 search">
//                 <input type="text" className="form-control input" placeholder="Search"/>
//                 <button className="btn btn-primary" type="submit">Go</button>
//             </form>
//         </div>
//             <table className="table">
//                 <tr className="news-list">     
//                 </tr>
//             </table>
//     </div>
//   )
// }

export default Body
