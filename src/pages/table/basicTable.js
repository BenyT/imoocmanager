//src/pages/table/basicTable.js
import React from 'react';
import {Card, Table} from 'antd'
import axios from './../../axios/index';

export default class BasicTable extends React.Component {
  state = {
    dataSource2: []
  };

  componentDidMount() {
    //定义数据源
    const data = [
      {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      },
      {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
      }
    ];
    //将数据存入state中保存
    this.setState({
      dataSource: data
    });

    this.request();//初始化调用数据
  }

  // 动态获取mock数据
  request = () => {
    axios.ajax({
      url: '/table/list1',
      data: {
        params: {
          page: 1
        },
        // //  增加下方代码,则不会Loading
        // isShowLoading:false
      }
    }).then((res) => {
      if (res.code == 0) {
        this.setState({
          dataSource2: res.result
        });

      }
    })
  };

  render() {
    /*title:'id',       展示表头显示内容显示id
      dataIndex:'id'    返回的索引值

      */
    const columns = [
      {
        title: 'id',
        dataIndex: 'id'
      },
      {
        title: '用户名',
        dataIndex: 'userName'
      },
      {
        title: '性别',
        dataIndex: 'sex',
        render(sex) {
          return sex == 1 ? '男' : '女'
        }
      },
      {
        title: '状态',
        dataIndex: 'state',
        render(state){
          let config = {
            '1':'咸🐟一条',
            '2':'风华浪子',
            '3':'北大才子一枚',
            '4':'百度FE',
            '5':'创业者',
          };
          return config[state];
        }
      },
      {
        title: '爱好',
        dataIndex: 'interest',
        render(abc){
          let config = {
            '1':'🏊‍',
            '2':'🏀',
            '3':'⚽',
            '4':'🏃',
            '5':'🏔',
            '6':'🚴',
            '7':'🎱',
            '8':'🎤',
          };
          return config[abc];
        }
      },
      {
        title: '生日',
        dataIndex: 'birthday'
      },
      {
        title: '地址',
        dataIndex: 'address'
      },
      {
        title: '早起时间',
        dataIndex: 'time'
      }
    ];
    //bordered    配置边框
    //不显示分页     去掉分页
    // +   pagination={false}
    return (
      <div>
        <Card title="基础表格">
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource}
            pagination={false}
          />
        </Card>
        <Card title="动态数据渲染表格" style={{margin: '10px 0'}}>
          <Table
            bordered
            columns={columns}
            dataSource={this.state.dataSource2}
            pagination={false}
          />
        </Card>
      </div>
    );
  }
}

