import Button from "@/src/components/button"
import CommonTable from "@/src/components/table"

const OnDemandRefreshComp = ({moduleType,activeTab,currentOrganization}:{moduleType?:string,activeTab?:string,currentOrganization?:string}) => {
  return (
    <div >
      <div className="flex justify-end mx-10">
      <Button variant='primary' size='md' className="w-20 text-sm md:text-base md:w-65 !rounded-lg md:rounded-[4px]">
        Create Performance Report
      </Button>
      </div>
      <CommonTable
            headers={[]}
            data={[]}
            page={0}
            pageCount={0}
            pageSize={0}
            totalCount={0}
            isLoading={false}
            onPageChange={()=>{}}
            emptyMessage={ 'No data Found'}
            tableCustomStyle={{
              tableContainer:
                'relative w-full overflow-x-auto overflow-y-hidden min-w-0',
              tableStyle:
                'border-separate border-spacing-y-2 rounded-lg w-full',
              tableHeaderStyle: 'bg-table-header',
              tableHeaderRowStyle: 'first:rounded-tl-lg last:rounded-tr-lg',
              tableHeadStyle:
                'first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap',
              tableHeadDiv:
                'text-sm font-bold text-left text-header-subtitle flex items-center justify-start px-4 py-3',
            }}
            renderRow={(item)=>console.warn(item)}
            // renderRow={(item) => {
            //   return (
            //     <tr
            //       key={item.id}
            //       className="bg-table-active text-sm text-gray-800 can-hover:hover-bg-gray-100 transition rounded-lg border border-gray-200"
            //     >
            //       {headers.map((header) => {
            //         if (header.key === 'action') {
            //           return (
            //             <td
            //               key={header.key as string}
            //               className="px-4 py-base-14 whitespace-nowrap text-center"
            //             >
            //               <ActionCell
            //                 status={item.status}
            //                 onAction={(type) => {
            //                   if (type === 'edit') {
            //                     setActiveServiceDetails(
            //                       item.originalData ?? null
            //                     );
            //                     setServiceDrawerOpen(true);
            //                   } else {
            //                     setModalType(type);
            //                     setSelectedServiceId(item.id);
            //                   }
            //                 }}
            //               />
            //             </td>
            //           );
            //         }

            //         if (header.key === 'status') {
            //           return (
            //             <td
            //               key={header.key as string}
            //               className="px-4 py-base-14 whitespace-nowrap"
            //             >
            //               <StatusPill status={item.status} />
            //             </td>
            //           );
            //         }

            //         if (header.key === 'serviceId') {
            //           return (
            //             <td
            //               key={header.key as string}
            //               onClick={() => {
            //                 if (item.serviceId && item.serviceId !== '-') {
            //                   const titleName = `${item.serviceName && item.serviceName !== '-' ? item.serviceName : 'Service'} (${item.serviceId})`;
            //                   router.push(
            //                     '/portal/services/' +
            //                       item.serviceId +
            //                       '?id=' +
            //                       item.id +
            //                       '&name=' +
            //                       encodeURIComponent(titleName)
            //                   );
            //                 }
            //               }}
            //               className={`max-w-40 overflow-hidden text-ellipsis whitespace-nowrap px-4 py-base-14 font-medium text-user-title ${
            //                 item.serviceId && item.serviceId !== '-'
            //                   ? 'hover:text-link-text underline can-hover:hover:text-link-text cursor-pointer'
            //                   : ''
            //               }`}
            //             >
            //               <TruncatedTooltip delay={300} placement="top">
            //                 {item.serviceId}
            //               </TruncatedTooltip>
            //             </td>
            //           );
            //         }

            //         return (
            //           <td
            //             key={header.key as string}
            //             className="px-4 py-base-14 whitespace-nowrap"
            //           >
            //             {(item as any)[header.key]}
            //           </td>
            //         );
            //       })}
            //     </tr>
            //   );
            // }}
          />
    </div>
  )
}

export default OnDemandRefreshComp