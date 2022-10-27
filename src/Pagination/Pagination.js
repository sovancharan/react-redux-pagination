import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    pageEight,
    pageFIVE,
    pageFour,
    pageNine,
    pageOne,
    pageSaven,
    pageSix,
    pageTen,
    pageThree,
    pageTwo,
} from '../Redux/Action/Action';
import { useState } from 'react';
import axios from 'axios';

const Pagination = () => {
    //     const [pageOneData, setPageOneData] = useState([]);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    let pageOneData = [];
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                console.log('error');
            });
    }, []);
    pageOneData = data.slice(0, 10);
    let pageTwoData = data.slice(10, 20);
    let pageThreeData = data.slice(20, 30);
    let pageFourData = data.slice(30, 40);
    let pageFiveData = data.slice(40, 50);
    let pageSixData = data.slice(50, 60);
    let pageSavenData = data.slice(60, 70);
    let pageEightData = data.slice(70, 80);
    let pageNineData = data.slice(80, 90);
    let pageTenData = data.slice(90, 100);

    //     console.log('page', pageOneData);
    return (
        <div>
            <Button onClick={() => dispatch(pageOne(pageOneData))}>1</Button>
            <Button
                onClick={() => dispatch(pageTwo(pageTwoData))}
                className="mx-2"
            >
                2
            </Button>
            <Button
                onClick={() => dispatch(pageThree(pageThreeData))}
                className="me-2"
            >
                3
            </Button>
            <Button onClick={() => dispatch(pageFour(pageFourData))}>4</Button>
            <Button
                onClick={() => dispatch(pageFIVE(pageFiveData))}
                className="mx-2"
            >
                5
            </Button>
            <Button onClick={() => dispatch(pageSix(pageSixData))}>6</Button>
            <Button
                onClick={() => dispatch(pageSaven(pageSavenData))}
                className="mx-2"
            >
                7
            </Button>
            <Button onClick={() => dispatch(pageEight(pageEightData))}>
                8
            </Button>
            <Button
                onClick={() => dispatch(pageNine(pageNineData))}
                className="mx-2"
            >
                9
            </Button>
            <Button onClick={() => dispatch(pageTen(pageTenData))}>10</Button>
        </div>
    );
};

export default Pagination;
