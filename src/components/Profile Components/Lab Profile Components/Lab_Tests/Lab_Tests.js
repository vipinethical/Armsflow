import React from 'react';
import './Lab_Tests.scss';

const Tests = () => {
    const test = [
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 },
        { testName: 'Test Name', cost: 500 }
    ]
    console.log(test);
    return (
        <div>
            <h4>All Tests</h4>
            <div className='table-section'>
                <div className='test-table-main'>
                    <div className='test-table-header'>
                        <h4>Tests</h4>
                        <button>Add Test</button>
                    </div>
                    <div className='test-table-body'>
                        <table>
                            <colgroup>
                                <col span="1" style={{ width: '25%' }} />
                                <col span="1" style={{ width: '60%' }} />
                                <col span="1" style={{ width: '7.5%' }} />
                                <col span="1" style={{ width: '7.5%' }} />
                            </colgroup>
                            <tbody>
                                {test.map(test => (
                                    <tr>
                                        <td><p>{test.testName}</p></td>
                                        <td><span>Cost:</span> Rs {test.cost}</td>
                                        <td>E</td>
                                        <td>D</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='test-table-main'>
                    <div className='test-table-header'>
                        <h4>Packages</h4>
                        <button>Add Package</button>
                    </div>
                    <div className='test-table-body'>
                        <table>
                            <colgroup>
                                <col span="1" style={{ width: '25%' }} />
                                <col span="1" style={{ width: '60%' }} />
                                <col span="1" style={{ width: '7.5%' }} />
                                <col span="1" style={{ width: '7.5%' }} />
                            </colgroup>
                            <tbody>
                                {test.map(test => (
                                    <tr>
                                        <td><p>{test.testName}</p></td>
                                        <td><span>Cost:</span> Rs {test.cost}</td>
                                        <td>E</td>
                                        <td>D</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tests;