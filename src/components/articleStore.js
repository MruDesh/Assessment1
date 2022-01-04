import React, { Component } from "react";
import { Link } from 'react-router-dom';


class ArticleStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        debugger
        if (localStorage.getItem("Articles") === [] || localStorage.getItem("Articles") === "undefined") {

            fetch(`http://demo5660605.mockable.io/article/list`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ articlesData: data.list });

                }).catch(console.log)

        } else {
            debugger
            this.setState({ articlesData: localStorage.getItem("Articles") })
        }

    }

    handleFavorites = (index) => {
        debugger
        this.state.articlesData[index] = { ...this.state.articlesData[index], isFavorite: true };
    }

    render() {
        localStorage.setItem("Articles", JSON.stringify(this.state.articlesData));
        let finalData = this.state.articlesData;
        return (
            <div>
                <header>
                    <div className="header-section">Article Store
                        <Link to='/article-add'>
                            <button className="add-button">Add New Article</button>
                        </Link>
                    </div>
                    <hr></hr>
                </header>
                {finalData ?
                    (finalData).map((data, index) =>
                        <body>
                            <div className="list-author">
                                {data.publisherName}
                            </div>
                            <div className="list-title">
                                {data.title}
                            </div>
                            <div className="list-description">
                                {data.description}
                            </div>
                            <div className="fav-icon">
                                {data.isFavorite === true ?
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                        onClick={() => this.handleFavorites(index)}>
                                        <path
                                            d="M8 5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4V7a2 2 0 0
                                    0-2-2H8z"
                                            fill="#292929"
                                        ></path>
                                    </svg>
                                    :
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                        onClick={() => this.handleFavorites(index)}>
                                        <path
                                            d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1
0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7
4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                                            fill="#292929"
                                        ></path>
                                    </svg>
                                }
                            </div>
                            <hr></hr>
                        </body>
                    )
                    : null}
            </div>
        )
    }
}

export default ArticleStore;