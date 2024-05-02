import MainLayout from '../../layout/MainLayout';

function User() {
  return (
    <div>
      Users
    </div>
  );
}
export default function UserWithLayout() {
  return (
    <MainLayout component={User}>
      <User />
    </MainLayout>
  );
}
