import React from 'react';
import { Country } from 'novelcovid';
import MUIDataTable from 'mui-datatables';

export interface StatsProps {
  countries: Country[] | undefined;
}

export const Stats = (props: StatsProps) => {
  const columns = [
    'Country',
    'Cases',
    'Deaths',
    'Recovered',
    'Active',
    'Critical',
    'Cases/1M',
    'Deaths/1M',
    'Tests',
    'Tests/1M'
  ];

  const data =
    props.countries?.map((e) => [
      e.country,
      e.cases,
      e.deaths,
      e.recovered,
      e.active,
      e.critical,
      e.casesPerOneMillion,
      e.deathsPerOneMillion,
      e.tests,
      e.testsPerOneMillion
    ]) || [];

  const options = {
    filter: false,
    download: false,
    search: false,
    print: false,
    viewColumns: true,
    responsive: 'scrollFullHeight',
    selectableRows: 'none',
    pagination: false
  };

  return (
    <MUIDataTable
      title={'List of countries affected'}
      data={data}
      columns={columns}
      options={options}
    />
  );
};
