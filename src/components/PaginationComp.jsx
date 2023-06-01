import { Grid, Pagination, Form, Segment } from 'semantic-ui-react';
const PaginationComp = ({ totalPage, activePage, setActivePage }) => {
  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  };
  return (
    <Grid columns={1}>
      <Grid.Column>
        <Pagination
          activePage={activePage}
          totalPages={totalPage}
          onPageChange={handlePageChange}
        />
      </Grid.Column>
    </Grid>
  );
};

export default PaginationComp;
