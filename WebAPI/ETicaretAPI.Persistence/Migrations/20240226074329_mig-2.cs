using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ETicaretAPI.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class mig2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Products",
                newName: "UpdatedTime");

            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Orders",
                newName: "UpdatedTime");

            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Customers",
                newName: "UpdatedTime");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedTime",
                table: "Products",
                newName: "DateTime");

            migrationBuilder.RenameColumn(
                name: "UpdatedTime",
                table: "Orders",
                newName: "DateTime");

            migrationBuilder.RenameColumn(
                name: "UpdatedTime",
                table: "Customers",
                newName: "DateTime");
        }
    }
}
