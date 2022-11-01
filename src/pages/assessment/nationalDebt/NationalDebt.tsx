import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import transactionApi from '@/apis/transactionApi';

// 不懂为什么数据guozhai数据每日有三个
const NationalDebt = () => {
  const [nationalDate, setNationalDate] = useState(null);
  console.log(nationalDate);

  useEffect(() => {
    transactionApi
      .getNationalZh()
      .then((res: any) => {
        setNationalDate(JSON.parse(JSON.stringify(res.data)));
      })
      .catch();
  }, []);

  return (
    <div id="chart">
      {nationalDate && (
        <Chart
          options={{
            title: {
              text: '折线图测试'
            },
            xaxis: {
              // x轴
              categories: Object.values(nationalDate['日期'])
            }
          }}
          type="line"
          series={[
            {
              name: 'Guests',
              data: Object.values(nationalDate['5年']) as any
            }
          ]}
          width="80%"
        />
      )}
    </div>
  );
};
export default NationalDebt;
